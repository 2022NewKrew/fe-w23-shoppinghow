import Datastore from 'nedb-promises';

const Item = Datastore.create('./models/Item.db');
const BannerItem = Datastore.create('./models/BannerItem.db');
const Menu = Datastore.create('./models/Menu.db');
const SpecialExhibition = Datastore.create('./models/SpecialExhibition.db');

export { Item, BannerItem, Menu, SpecialExhibition };
