import 'can-admin/components/nav-container/nav-container';
import 'can-admin/components/nav-page/nav-page';
import stache from 'can-stache';
import DefineMap from 'can-define/map/map';
import ajax from 'can-util/dom/ajax/ajax';

var render = stache(document.getElementById('demo-html').innerHTML);

var viewModel = new DefineMap({
    people: ajax({
        url: 'http://jsonplaceholder.typicode.com/users'
    }),
    pages: [{
        label: 'List'
    }, {
        label: 'Create',
        active: true
    }, {
        label: 'Other Options'
    }]
});

document.body.appendChild(render(viewModel));

window.DEMO_SOURCE = `

import 'can-admin/components/nav-container/nav-container';
import 'can-admin/components/nav-page/nav-page';
import stache from 'can-stache';
import DefineMap from 'can-define/map/map';
import ajax from 'can-util/dom/ajax/ajax';

var render = stache(document.getElementById('demo-html').innerHTML);

var viewModel = new DefineMap({
    people: ajax({
        url: 'http://jsonplaceholder.typicode.com/users'
    }),
    pages: [{
        label: 'List'
    }, {
        label: 'Create',
        active: true
    }, {
        label: 'Other Options'
    }]
});

document.body.appendChild(render(viewModel));
`
