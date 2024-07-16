// Components
import ListPage from 'app/View/Components/Pages/ListPage/ListPage';
import ScanPage from 'app/View/Components/Pages/ScanPage/ScanPage';
import SettingsPage from 'app/View/Components/Pages/SettingsPage/SettingsPage';

// Core
import Route from 'route/Core/Route';

Route.init();

Route.get('/', ScanPage).name('home');
Route.get('/settings', SettingsPage).name('settings');
Route.get('/list', ListPage).name('list');


// Route.namefix('product').group(function (Route) {
//     Route.get('/{id}', HomePageComponent).name('get.one');

//     Route.prefix('{id}/tag/{id}', 'tag').group(function (Route) {
//         Route.get('/', HomePageComponent).name('get.one');
//         Route.get('/titles', HomePageComponent).name('get.one.titles');
//     });
// });

// Route.namefix('order').group(function (Route) {
//     Route.get('/{id}', HomePageComponent).name('get.one');

//     Route.prefix('{id}/item/{id}', 'item').group(function (Route) {
//         Route.get('/', HomePageComponent).name('get.one');
//         Route.get('/titles', HomePageComponent).name('get.one.titles');
//     });
// });


// const data = RouteData.getAll();

// const uuids = Object.keys(data);

// console.log('uuids', uuids);

// for (const uuid of uuids) {
//     console.log(uuid, data[uuid]);
// }

// //////////////////////////////// Client ////////////////////////////////

// // source, target, status = 302, options = {'pop': false,}
// Route.redirect(Route.getUrl('product'), Route.getUrl('tag'), 301, {
//     'pop': true,
// });

// Route.redirect('product/*', 'tag/*');

// const name = Route.currentRouteName(); // string
// const action = Route.currentRouteAction(); // string