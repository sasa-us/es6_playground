import $ from 'jquery';

export function addToDom(text) {
    $('#root').append(`<h2>${text}</h2>`);
}