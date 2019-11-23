import md5 from './md5';

const cipher = salt => {
    let textToChars = text => text.split('').map(c => c.charCodeAt(0));
    let byteHex = n => ("0" + Number(n).toString(16)).substr(-2);
    let applySaltToChar = code => textToChars(salt).reduce((a,b) => a ^ b, code);    

    return text => text.split('')
        .map(textToChars)
        .map(applySaltToChar)
        .map(byteHex)
        .join('');
};

const decipher = salt => {
    let textToChars = text => text.split('').map(c => c.charCodeAt(0));
    let saltChars = textToChars(salt);
    let applySaltToChar = code => textToChars(salt).reduce((a,b) => a ^ b, code);
    return encoded => encoded.match(/.{1,2}/g)
        .map(hex => parseInt(hex, 16))
        .map(applySaltToChar)
        .map(charCode => String.fromCharCode(charCode))
        .join('');
};


const loadFile = (() => {
    const loader = (fileName, callback, fileType = 'js') => {

        let fileRequest;

        if (fileType === 'js') {
            fileRequest = document.createElement('script');
            fileRequest.setAttribute('type', "text/javascript");
            fileRequest.setAttribute('src', fileName);
            fileRequest.setAttribute('async', true);
            if (callback) {
                fileRequest.onload = callback;
            }
        } else if (fileType === 'css') {
            fileRequest = document.createElement('link');
            fileRequest.setAttribute('rel', 'stylesheet');
            fileRequest.setAttribute('type', 'text/css');
            fileRequest.setAttribute('href', fileName);
        }

        if (fileRequest) {
            document.getElementsByTagName("head")[0].appendChild(fileRequest);
        }
    };

    return loader;
})();

export const loadApp = (() =>{

    const phase01 = () => {
        
        loadFile(
            '/js/jquery.3.4.1.min.js',
            phase02
        );
    };

    const phase02 = () => {
        loadFile(
            '/js/jquery-ui.min.js', 
            phase03
        );
    };

    const phase03 = () => {
        loadFile(
            '//cdn.jsdelivr.net/npm/medium-editor@latest/dist/js/medium-editor.min.js', 
            phase04
        );
    };

    const phase04 = () => {
        loadFile('/js/gallery-editor.js');
    };

    const phase05 = () => {
        if (window.editorInit) {
            window.editorInit()
        } else {
            console.log('window.editorInit not found!');
        }
    };

    return () => {
        phase01();
    };
})();

export const initPasswordManager = (() => {

    const togglePasswordInput = () => {
        const el = document.getElementById('edit-mode-input-wrap');
        var elementStyle = el.getAttribute('style');
        console.log('elementStyle [' + elementStyle + ']');
        if (elementStyle) {
            el.setAttribute("style", "");
        } else {
            el.setAttribute("style", "transform: scale(1,1)");
            
            const input = document.getElementById('edit-mode-password');
            setTimeout(()=>{ input.focus(); },400);
        }
    };
    
    const checkHash = e => {
        const value = e.target ? e.target.value : '';
        if (md5(value) === window.passwordHash) {
            loadApp();
            removePasswordInput();
            closeSidebar();
        }
    };
    
    const removePasswordInput = () => {
        const asterisk = document.getElementById('edit-mode-asterisk-button');
        asterisk.removeEventListener('click', togglePasswordInput);
        const el = document.getElementById('edit-mode-password');
        el.removeEventListener('keyup', checkHash);
        const div = document.getElementById('edit-mode-ux');
        div.setAttribute('style', 'opacity: 0');
        setTimeout(() => {
            div.parentNode.removeChild(div);
        }, 800);
    };
    
    const closeSidebar = () => {
        const underlay = document.getElementById('sidebar-menu-underlay-1');
        console.log('gonna click!', underlay);
        underlay.click();
    };
    
    const hydrateInput = () => {
        const el = document.getElementById('edit-mode-password');
        el.addEventListener('keyup', checkHash);
    };
    
    const hydrateAsterisk = () => {
        const asterisk = document.getElementById('edit-mode-asterisk-button');
        asterisk.addEventListener('click', togglePasswordInput);
    };
    
    return () => {
        hydrateAsterisk();
        hydrateInput();
    };
    
})();
