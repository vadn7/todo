export function createInputTextValue(parentNode,textInputEdit){

    const textEl=document.createElement('input')
    textEl.type='text';
    textEl.className='text';

    textEl.value=textInputEdit;

parentNode.appendChild(textEl);

}