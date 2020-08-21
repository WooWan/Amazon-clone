export const initialState = {
         basket: [
           {
             id: "123213",
             title: "New Apple iPad Pro",
             price: 598.99,
             rating: 4,
             image:
               "https://images-na.ssl-images-amazon.com/images/I/81SGb5l%2BlZL._AC_SL1500_.jpg",
           },
           {
             id: "22223",
             title: "New Galaxy tablet",
             price: 598.99,
             rating: 4,
             image:
               "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA4MDhfMjUw%2FMDAxNTk2ODU5NDAxNzY3.Z8M4zk8BNBbcSd4PlHSevPSuJYKfilzVgLt9_w_mlbog.GUG4TcltUJ3SQoPImowQ3Y83RtcayQ7NwE5wMOERV9og.JPEG.akwkshdio%2F%25BB%25EF%25BC%25BA%25C0%25FC%25C0%25DA_%25B0%25B6%25B7%25B0%25BD%25C3%25C5%25C7_S6_LITE_10.4%252C_Wi-Fi%252BCellular%252C_%25BF%25C1%25BD%25BA%25C6%25F7%25B5%25E5_%25B1%25D7%25B7%25B9%25C0%25CC%252C_128GB%252C_SM-P615.jpg&type=sc960_832",
           },
         ],
         user: null,
       };

const reducer=(state,action)=>{
    console.log(action);
    switch(action.type){
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item]
            };
        case "REMOVE_FROM_BASKET":
            let newBasket=[...state.basket];
            const index=state.basket.findIndex(
                (basketItem)=>basketItem.id === action.id
                );
            if(index>=0){
                newBasket.splice(index,1);
            }else{
                console.warn(
                    'Cant move product (id=${action.id})'
                );
            }  
            return {
                ...state, 
                basket:newBasket,
            };
        default:
            return state;
    }
}

export default reducer;