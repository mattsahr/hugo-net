import baguetteBox from './baguetteBox';
import yall from 'yall-js';
import { loadApp, initPasswordManager } from './gallery-editor-init';

const sidebar = () => {
    const underlay = document.getElementById('sidebar-menu-underlay-1');
    const menu =  document.getElementById('sidebar-menu-1');
    const button = document.getElementById('menu-button-01');
    
    const openMenu = () => {
        underlay.style['display'] = 'block';
        setTimeout(() => { underlay.style['opacity'] = '1'; }, 10);
        menu.style['transform'] = 'translate(0, 0)';
    };
    
    const closeMenu = () => {
        underlay.style['opacity'] = '0'; 
        setTimeout(() => { underlay.style['display'] = 'none'; }, 400);
        menu.style['transform'] = 'translate(-280px, 0)';
    };
    
    underlay.addEventListener('click', closeMenu);
    button.addEventListener('click', openMenu);
};

const adjustPhotoHeights = () => {
    const spacers = document.getElementsByClassName('photo-spacer');
    const spacerList = Array.prototype.slice.call(spacers);
    for (const spacer of spacerList) {
        const ratio = Number(spacer.getAttribute('data-height-ratio'));
        if (ratio < 55 || ratio > 58) {
            const newRatio = Math.min(100, Math.max(30, ratio));
            spacer.setAttribute('style', 'padding-bottom: ' + newRatio + '%;');
        }
    }
};

const appInit = () => {

    yall();

    window.baguetteBox = baguetteBox;
    window.gallery = baguetteBox.run('.lightbox-gallery-list');
    
    adjustPhotoHeights();
    
    sidebar();
    
    // initPasswordManager();

    loadApp();
};

document.addEventListener("DOMContentLoaded", appInit);
