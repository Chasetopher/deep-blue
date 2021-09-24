const { Category } = require ('../models');

const categoryData = [
/*  ~~~FORMAT:~~~
    {
        category_name: 'Sample Category',
    },
*/

//Start seeds here
{
    category_name: 'Cave Explorers'
},
{
    category_name: 'Pearl Divers'
},
{
    category_name: 'Nether Jewels'
},
{
    category_name: 'Anchor Bottoms'
},
{
    category_name: 'Pearl Divers'
},
{
    category_name: 'falsdj;fasjdfl;kjasdl;fkj'
},

]

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;