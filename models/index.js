//IMPORT MODELS
const Category = require('./Category');
const Product = require('./Product');

//associations.. do we need anything for users?
Category.hasMany(Product, {
    foreignKey: 'category_id'
});

Product.belongsTo(Category, {
    foreignKey: 'category_id'
});

module.exports = {
    Category, Product
};
