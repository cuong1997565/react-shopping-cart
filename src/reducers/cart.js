import * as types from './../constants/ActionType';
var data = JSON.parse(localStorage.getItem('CART'));
var initialState = [
    {
        product :  {
            id : 1,
            name : 'Iphone 7 Plus',
            description : 'San pham do apple san xuat',
            price : 500,
            inventory : 10,
            image : 'https://images.fpt.shop/unsafe/fit-in/192x192/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2019/4/1/636897089206763744_iPhone-XS-max-dd.png',
            rating : 4
        },
        quantity : 5
    }
];

const cart = (state = initialState, action) => {
    switch(action.type) {
        case types.ADD_TO_CART:
            console.log("action :"+ action);
        default : 
            return [...state];
    }
}

export default cart;