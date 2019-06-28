var initialState = [
    {
        id : 1,
        name : 'Iphone 7 Plus',
        description : 'San pham do apple san xuat',
        price : 500,
        inventory : 10,
        image : 'https://images.fpt.shop/unsafe/fit-in/192x192/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2019/4/1/636897089206763744_iPhone-XS-max-dd.png',
        rating : 4
    },
    {
        id : 2,
        name : 'Samsung glaxy S7',
        description : 'San pham do samsung san xuat',
        price : 400,
        inventory : 15,
        image : 'https://cdn.nguyenkimmall.com/images/thumbnails/250/250/detailed/546/GalaxyA7-Blue_01.jpg',
        rating : 3
    },
    {
        id : 3,
        name : 'Oppo F1s',
        description : 'San pham do china san xuat',
        price : 450,
        inventory : 5,
        image : 'https://images.fpt.shop/unsafe/fit-in/192x192/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2019/2/21/636863616938548520_ss-galaxy-s10-plus-daidien.png',
        rating : 5
    }
];

const products = (state = initialState , action) => {
    switch(action.type) {
        default : 
            return [...state];
    }
}

export default products;