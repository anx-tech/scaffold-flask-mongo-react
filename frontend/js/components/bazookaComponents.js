import Baz from 'bazooka';


import ListItemsComponent from './ListItemsComponent';
import NewItemComponent from './NewItemComponent';


Baz.register({
    'ListItemsComponent': ListItemsComponent,
    'NewItemComponent': NewItemComponent,
});


Baz.watch();
