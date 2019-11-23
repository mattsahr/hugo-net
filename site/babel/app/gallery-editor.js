import mediumEditorCSS from '../styles/medium-editor.min.css';
import mediumEditorBootstrap from '../styles/medium-editor-bootstrap.css';

const editGallery = () => {

    let $ = null;
    
    if (!window.$) {
        return;
    }
    
    const masterDoc = {
        title: '',
        subA: '',
        subB: '',
        subC: '',
        url: '',
        month: '',
        year: '',
        resources: [],
        gallery_data: []
    };
    
    const allMonths = [
        'January', 'February', 'March', 'April', 'May', 'June', 
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    
    window.masterDoc = masterDoc;
    
    const moveUpDown = ($upEl, $downEl, upHeight, downHeight) => {
        const $switcher = $(
                '<div />', 
                { class: 'up-down-switcher', style: 'height: ' + (upHeight + downHeight) + 'px'}
            ).insertBefore($downEl);
        
        $switcher.append($downEl);
        $switcher.append($upEl);

        $upEl.css('transform', 'translate(0, -' + downHeight + 'px)');
        $downEl.css('transform', 'translate(0, ' + upHeight + 'px)');

        setTimeout(() => {
            $downEl.detach();
            $downEl.css('transform', 'translate(0, 0)').css('opacity', 1);

            $upEl.detach();
            $upEl.css('transform', 'translate(0, 0)').css('opacity', 1);

            $upEl.insertBefore($switcher);
            $downEl.insertBefore($switcher);
            
            $switcher.remove();
        }, 350);        
    };
    
    const moveUp = $upEl => {
        const index =  $upEl.index();
        const HEIGHT_ADJUSTMENT = (40 * 2) /*padding*/ + 6 /*margins*/ + 2 /*borders*/;
        const $downEl = $upEl.siblings('.photoframe:nth-child(' + index + ')');
        const upHeight = $upEl.height() + HEIGHT_ADJUSTMENT;
        const downHeight = $downEl.height() + HEIGHT_ADJUSTMENT;
        moveUpDown($upEl, $downEl, upHeight, downHeight);
    };

    const moveDown = $downEl => {
        const index =  $downEl.index() + 2;
        const HEIGHT_ADJUSTMENT = (40 * 2) /*padding*/ + 6 /*margins*/ + 2 /*borders*/;
        const $upEl = $downEl.siblings('.photoframe:nth-child(' + index + ')');
        const upHeight = $upEl.height() + HEIGHT_ADJUSTMENT;
        const downHeight = $downEl.height() + HEIGHT_ADJUSTMENT;
        moveUpDown($upEl, $downEl, upHeight, downHeight);
    };
    
    const toggleUnusedPhotos = (forceClose) => {
        const $unused = $('#unused-pics-wrap');
        const $closeX = $('.unused-bug .close-x');
        
        if (forceClose === 'forceClose' || $unused.css('display') === 'block') {
            $unused.css('opacity', '0');
            $closeX.css('display', 'none');
            setTimeout(()=> {
                $unused.css('display', 'none');
            }, 300)
        } else {
            $unused.css('display', 'block');
            $closeX.css('display', 'block');
            setTimeout(()=> {
                $unused.css('opacity', '1');
            }, 10)
       }
    };
    
    const hydrateUnusedBug = () => {
        const $bug = $('.header-column .unused-bug');
        $bug.click(toggleUnusedPhotos);
    }
    
    const updateUnusedBug = () => {
        const unusedPicsIsEmpty = $('#unused-pics .photoframe').length === 0;
        const $bug = $('.header-column .unused-bug');

        if (unusedPicsIsEmpty) {
            toggleUnusedPhotos('forceClose');
            $bug.css('display', 'none');
        } else {
            $bug.css('display', 'flex');
        }
    };
    
    const removeMe = $el => {
        const HEIGHT_ADJUSTMENT = (40 * 2) /*padding*/ + 6 /*margins*/ + 2 /*borders*/;
        const heightStyle = 'style="height: ' + ($el.height() + HEIGHT_ADJUSTMENT) + 'px;"';
        $el.wrap('<div class="remove-wrapper" ' + heightStyle + ' />');

        const $removeWrapper = $('.remove-wrapper');
        
        setTimeout(() => { 
            $el.css('transform', 'scale(1, 0) translate(0, -100px)');
            $removeWrapper.css('height', '0px');
        }, 10);

        setTimeout(() => { 
            $el.appendTo('#unused-pics');
            $el.css('transform', '');
            
            setTimeout(()=>{  $removeWrapper.remove(); updateUnusedBug(); }, 10);
        }, 350);
    };
    
    const arrangeRemoveMe = $el => {
        const HEIGHT_ADJUSTMENT = 4 /*padding*/ + 8 /*margins*/ + 2 /*borders*/;
        const heightStyle = 'style="height: ' + ($el.height() + HEIGHT_ADJUSTMENT) + 'px;"';
        $el.wrap('<div class="remove-wrapper" ' + heightStyle + ' />');
        const $removeWrapper = $('.remove-wrapper');
        
        $el.css('transform', 'scale(1, 0)');

        setTimeout(() => { 
            $el.css('transform', 'scale(1, 0) translate(0, -100px)');
            $removeWrapper.css('height', '0px');
        }, 10);

        setTimeout(() => { 
            $el.appendTo('#arrange-unused');
            $el.css('transform', '');
            
            setTimeout(()=>{  $removeWrapper.remove(); }, 10);
        }, 350);

    };
    
    const addMe = $el => {
        $el.css('transform', 'scale(0, 0)');
        setTimeout(() => { 
            $el.prependTo('#good-pics');
            setTimeout(()=>{ updateUnusedBug(); $el.css('transform', ''); }, 10);
        }, 350);
    };

    const actuallySaveDoc = (content, fileName) => {
        const data = JSON.stringify(content, null, 2);
        const href = "data:text/json;charset=utf-8," + encodeURIComponent(data);
        const anchor = document.createElement('a');

        anchor.setAttribute("href", href);
        anchor.setAttribute("download", fileName);
        anchor.click();
    };
    
    const saveMasterDoc = () => {
        let url = 'empty-url';
        $('#page-meta input').each((index, input) => {
            const value = input.value;
            const ref = $(input).attr('data-ref');
            masterDoc[ref] = value;
            
            if (ref === 'url' && value) {
                url = value;
            }
        });
        
        let weight = '';
        $('#page-meta select').each((index, input) => {
            const value = input.value < 10 ? '0' + input.value : input.value;
            weight = value + weight;
        });
        masterDoc.weight = weight;
        
        const month = $('#page-month').val();
        console.log('month!', month);
        masterDoc.month = month;
        
        masterDoc.year = $('#page-year').val();
        console.log('year!', masterDoc.year);

        masterDoc.resources = [];
        masterDoc.gallery_data = [];

        $('#good-pics .gallery-pic').each((index, photo) => {
            const src = $(photo).attr('data-filename');
            masterDoc.resources.push({src});
            masterDoc.gallery_data.push({fileLocation: src})
        });

        $('#good-pics .photo-description').each((index, photo) => {
            masterDoc.gallery_data[index].description = photo.innerHTML;
        });

        console.log('MASTER DOC', masterDoc);
        console.log('RESOURCES', masterDoc.gallery_data);
        
        // actuallySaveDoc(masterDoc, url + '.json');

    };
    
    let arrangerMouseTimer = null;
    
    const populateGalleryFromArranger = (() => { 
        
        const getPhotosOrder = () => {
            const orderedPhotos = [];
            $('#gallery-arranger .sort-column').each(function(index) {
                $(this).find('.sort-item').each(function(subIndex){
                    orderedPhotos.push(this.getAttribute('data-index'));
                });
            });
            return orderedPhotos;
        };

        const getUnusedOrder = () => {
            const unusedPhotos = [];
            
            $('#arrange-unused .sort-item').each(function(subIndex){
                unusedPhotos.push(this.getAttribute('data-index'));
            });
            return unusedPhotos;
        };

        const getAllPhotos = () => {
            const batchA = $.makeArray($('#good-pics .photoframe').detach());
            const batchB = $.makeArray($('#unused-pics .photoframe').detach());
            return batchA.concat(batchB);
        };

        const getPhotoByPicOrder = (orderIndex, batch) => {
            const batchIndex = batch
                .findIndex(el => Number(el.getAttribute('data-pic-order')) === Number(orderIndex));

            if (batchIndex !== -1) {
                return batch.splice(batchIndex, 1);
            }
            return undefined;
        };

        return () => {
            const orderedPhotos = getPhotosOrder();
            const unusedPhotos = getUnusedOrder();
            const batch = getAllPhotos();
    
            const $goodDiv =  $('#good-pics');
            
            for (const orderIndex of orderedPhotos) {
                const photo = getPhotoByPicOrder(orderIndex, batch);
                if (photo) {
                    $goodDiv.append(photo);
                }
            }
    
            const $unusedDiv = $('#unused-pics'); 

            for (const orderIndex of unusedPhotos) {
                const photo = getPhotoByPicOrder(orderIndex, batch);
                if (photo) {
                    $unusedDiv.append(photo);
                }
            }
            
            updateUnusedBug();
        };

    })();

    const buildArranger = () => {
        const $allPics = $('#good-pics .gallery-pic');
        $('body').append('<div id="gallery-arranger" style="display:block;">' +
            '<div id="close-arranger">X</div>' +
            '<div id="work-surface"></div>' +
            '</div>'
        );
        $('body').append('<div id="arrange-unused" style="display: none;" />');

        const $surface = $('#work-surface');
        const totalWidth = $('#gallery-arranger').width();

        // CHECK MARK   ✓   FAT CHECK MARK   ✔
        toggleArrangePanel();

        let columns = Math.round(Math.min(5, $allPics.length/20));
        columns = Math.round(Math.min(columns, totalWidth/200));
        const perColumn = Math.ceil($allPics.length/columns);
        
        let index = 0;
        let column = 0; 
        

        if (columns < 1 || totalWidth < 1) {
            return;
        }

        while (index < $allPics.length - 1) {
            $surface.append('<div class="sort-column" id="sort-column-' + column + '" />');
            const $column = $('#sort-column-' + column);
            for (let i = 0; i < perColumn; i++) {
                if ($allPics[index]) {
                    const tinySrc = $($allPics[index]).attr('data-tiny');
                    $column.append(
                        '<div class="sort-item" data-index="'+ index +'">' +
                            '<div class="remove-me">X</div>' +
                            '<div class="inner">' +
                                '<div class="img-framer" />' +
                                '<img data-index="' + index +'" src="' + tinySrc + '" />' +
                            '</div>' +
                        '</div>'
                    );
                }
                index++;
            }
            column++;
        }
        
        // ARRANGE PANEL CLOSE BUTTON
        $('#close-arranger').click(function(e) {
            populateGalleryFromArranger();
            toggleArrangePanel();
        });
        
        // REMOVE AN IMAGE X BUTTON
        $('.sort-item .remove-me').click(function(e) {
            const photoFrame = $(this).parents('.sort-item');
            arrangeRemoveMe(photoFrame);
        });
        
        // IMAGE CLICK SHOW LIGHTBOX
        $('.sort-item img').click(function(e) {
            const dataIndex = $(this).attr('data-index');
            baguetteBox.show(dataIndex, gallery[0]);
        });

        // IMAGE EXPAND ON HOVER
        $('.sort-item img').on('mouseenter', function(e) {
            clearTimeout(arrangerMouseTimer);
            const $img = $(this);
            arrangerMouseTimer = setTimeout(()=>{
                $img.css('z-index', '10');
                $img.css('box-shadow', '2px 2px 10px rgba(0, 0, 0, 0.8)');
                $img.css('transform', 'scale(3, 3)');
            },600);
        });

        // IMAGE REDUCE ON MOUSE-OUT
        $('.sort-item img').on('mouseleave', function(e) {
            clearTimeout(arrangerMouseTimer);
            const $img = $(this);
            $img.css('transform', '');
            setTimeout(()=> {
                $img.css('box-shadow', '');
                $img.css('z-index', '');
            }, 600)
        });
        

        // DRAG AND DROP FUNCTIONALITY
        $( '.sort-column' ).sortable({
            connectWith: ".sort-column"
        }).disableSelection();

        console.log('PHOTO COUNT', $allPics.length, ' totalW', totalWidth, perColumn, columns);

    };
    
    const toggleArrangePanel = () => {
        const display = $('#gallery-arranger').css('display');
        if (display === 'block'){
            $('#gallery-arranger').css('opacity', '0');
            setTimeout(() => {
                $('#gallery-arranger').css('display', 'none');
            }, 600);
        } else {
            $('#gallery-arranger').css('display', 'block');
            setTimeout(() => {
                $('#gallery-arranger').css('opacity', '1');
            }, 20);
        }
    };
    
    const hydrateUpDownUX = () => {
        $('#good-pics .description-block')
            .addClass('edit-mode')
            .append(
                '<div class="up-down-controls">' +
                    '<div class="move-up-button"><div class="internal">^</div></div>' +
                    '<div class="move-down-button"><div class="internal">v</div></div>' +
                '</div>'
            );
        
        $('#good-pics .photoframe')
            .append('<div class="remove-me">X</div>');
        $('#good-pics .photoframe')
            .append('<div class="add-me">+</div>');
        
        $('.move-up-button').click(function(e) {
            const photoFrame = $(this).parents('.photoframe');
            moveUp(photoFrame);
        });
        
        $('.move-down-button').click(function(e) {
            const photoFrame = $(this).parents('.photoframe');
            moveDown(photoFrame);
        });

        $('#good-pics .remove-me').click(function(e) {
            const photoFrame = $(this).parents('.photoframe');
            removeMe(photoFrame);
        });

        $('.add-me').click(function(e) {
            const photoFrame = $(this).parents('.photoframe');
            addMe(photoFrame);
        });
    };
    
    const hydratePageDetails = () => {
        
        const mSelected = mo => String(mo) === (GalleryEditSettings.month || '0')
            ? 'selected="selected" ' : '';
        
        const ySelected = yr => String(yr) === (GalleryEditSettings.year || '2020')
            ? 'selected="selected" ' : '';
        
        const getVal = type => GalleryEditSettings[type] ? 'value="' + GalleryEditSettings[type] + '"' : '';

        const $details = $('#page-details');
        $details.append(
            '<form id="page-meta">' +
                '<h2>Gallery Page Details</h2>' + 
                '<div class="side">' +
                    '<div class="input-pair">' +
                        '<label for="page-title">Title</label>' +
                        '<input id="page-title" data-ref="title" type="text" ' + getVal('title') +' />' +
                    '</div>' +
                    '<div class="input-pair">' +
                        '<label for="page-sub-title-A">subtitle A</label>' +
                        '<input id="page-sub-title-A" data-ref="subA" type="text" ' + getVal('subA') +' />' +
                    '</div>' +
                    '<div class="input-pair">' +
                        '<label for="page-sub-title-B">subtitle B</label>' +
                        '<input id="page-sub-title-B" data-ref="subB" type="text" ' + getVal('subB') +' />' +
                    '</div>' +
                '</div>' + 
                '<div class="side">' +
                    '<div class="input-pair">' +
                        '<label for="page-url">URL</label>' +
                        '<input id="page-url" type="text" data-ref="url"  placeholder="my-page-slug" ' + 
                            getVal('url') +' />' +
                    '</div>' +
                    '<div class="input-pair">' +
                        '<label for="page-month">Month</label>' +
                        '<select id="page-month">' +
                            '<option value="0"' + mSelected(0) + '>' +   allMonths[0] + '</option>' +
                            '<option value="1"' + mSelected(1) + '>' +   allMonths[1] + '</option>' +
                            '<option value="2"' + mSelected(2) + '>' +   allMonths[2] + '</option>' +
                            '<option value="3"' + mSelected(3) + '>' +   allMonths[3] + '</option>' +
                            '<option value="4"' + mSelected(4) + '>' +   allMonths[4] + '</option>' +
                            '<option value="5"' + mSelected(5) + '>' +   allMonths[5] + '</option>' +
                            '<option value="6"' + mSelected(6) + '>' +   allMonths[6] + '</option>' +
                            '<option value="7"' + mSelected(7) + '>' +   allMonths[7] + '</option>' +
                            '<option value="8"' + mSelected(8) + '>' +   allMonths[8] + '</option>' +
                            '<option value="9"' + mSelected(9) + '>' +   allMonths[9] + '</option>' +
                            '<option value="10"' + mSelected(10) + '>' + allMonths[10] + '</option>' +
                            '<option value="11"' + mSelected(11) + '>' + allMonths[11] + '</option>' +
                        '</select>' +
                    '</div>' +
                    '<div class="input-pair">' +
                        '<label for="page-year">Year</label>' +
                        '<select id="page-year">' +
                            '<option value="2021"'+ ySelected(2021) +'>2021</option>' +
                            '<option value="2020"'+ ySelected(2020) +'>2020</option>' +
                            '<option value="2019"'+ ySelected(2019) +'>2019</option>' +
                            '<option value="2018"'+ ySelected(2018) +'>2018</option>' +
                            '<option value="2017"'+ ySelected(2017) +'>2017</option>' +
                            '<option value="2016"'+ ySelected(2016) +'>2016</option>' +
                            '<option value="2015"'+ ySelected(2015) +'>2015</option>' +
                            '<option value="2014"'+ ySelected(2014) +'>2014</option>' +
                            '<option value="2013"'+ ySelected(2013) +'>2013</option>' +
                            '<option value="2012"'+ ySelected(2012) +'>2012</option>' +
                            '<option value="2011"'+ ySelected(2011) +'>2011</option>' +
                            '<option value="2010"'+ ySelected(2010) +'>2010</option>' +
                        '</select>' +
                    '</div>' +
                '</div>' + 
                '<div class="button-frame">' +
                    '<button id="save-doc">Save Gallery</button>' +
                    '<button id="arrange-button">Arrange</button>' +
                '</div>' +
            '</form>'
        );
        
        $('#save-doc').on('click', (e) => {
            e.preventDefault();
            saveMasterDoc();
        });

        $('#arrange-button').on('click', (e) => {
            e.preventDefault();
            toggleArrangePanel();
        });

        const height = $('#page-meta').height();
        $details.css('height', (height + 40) + 'px');
        
    };
    
    const hydrateDescriptionUX = () => {
        $('.original-description').css('display', 'none');

        $('#good-pics .description-block')
            .addClass('edit-mode')
            .append(
                '<div class="text-area-wrap">' +
                    '<h4>Description</h4>' +
                    '<div class="photo-description" />' +
                '</div>'
            );
        
        $('#good-pics .photoframe').each((index, el) => {
            const content = $(el).find('.original-description').html();
            if (content) {
                $(el).find('.photo-description').html(content);
            }
        })
    };
    
    let Editor = null;

    const initMediumEditor = () => {
        if (typeof window.MediumEditor !== 'undefined') {
            const elements = document.querySelectorAll('.photo-description');

            Editor = new window.MediumEditor(elements); 
        }
    };
    
    const init = () => {
        $ = window.$;
        $.fn.filterByData = function(prop, val) {
            return this.filter(
                function() { return $(this).data(prop)==val; }
            );
        };

        const details = $('#page-details');
        if (details.length) {
            hydrateUpDownUX();
            hydrateUnusedBug();
            hydrateDescriptionUX();
            hydratePageDetails();
            buildArranger();
            initMediumEditor();
        } else {
            console.log('NO DETAILS');
        }
    };

    init();

};

editGallery();
