const express= require('express');
const bookRouter= express.Router();

function router(nav){
    const books= [
        {
            title: 'War and love',
            genre: 'Historic',
            author: 'Lev Tolstoy',
            read: false
        },
        {
            title: 'War and love',
            genre: 'Historic',
            author: 'Lev Tolstoy',
            read: false
        },
        {
            title: 'War and love',
            genre: 'Historic',
            author: 'Lev Tolstoy',
            read: false
        },
        {
            title: 'War and love',
            genre: 'Historic',
            author: 'Lev Tolstoy',
            read: false
        },
        {
            title: 'War and love',
            genre: 'Historic',
            author: 'Lev Tolstoy',
            read: false
        },
        {
            title: 'War and love',
            genre: 'Historic',
            author: 'Lev Tolstoy',
            read: false
        },
    ];
    
    bookRouter.route('/').get((req, res)=>{
        res.render(
            'bookListView',
             {
            nav, 
        
            title:'Library',
            books
        });
    });
    
    bookRouter.route('/:id')
    .get((req, res)=>{
        const {id}=req.params;
        res.render(
            'bookView', 
            {
            nav, 
        
            title:'Library',
            book: books[id]
        });
    });
    return bookRouter;
}


module.exports=router;