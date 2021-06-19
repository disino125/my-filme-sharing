const Mock = require('mockjs')

Mock.mock(/api\/tvList/,'get',{
    status:200,
    message:'get filmList success',
    'data|50':[
        {
            id:'@increment(1)',
            title:'@word(2,3)',
            url:'@dataImage(220x308)'
        }]
})

Mock.mock(/api\/filmList/,'get',{
    status:200,
    message:'get filmList success',
    'data|50':[
        {
            id:'@increment(1)',
            title:'@word(2,3)',
            url:'@dataImage(220x308)'
        }]
})

Mock.mock(/api\/filmDetail/,'get',{
    status:200,
    message:'get filmDetail success',
    data:{
        id:0,
        filmInfos:{
            title:'@word(3,10)',
            date: "@date('dd.MM.yyyy')",
            description:'@paragraph(3,5)',
            img:'@dataImage(370x490)'
        }
    }
})

Mock.mock(/api\/tvDetail/,'get',{
    status:200,
    message:'get filmDetail success',
    data:{
        id:0,
        tvInfos:{
            title:'@word(3,10)',
            date: "@date('dd.MM.yyyy')",
            description:'@paragraph(3,5)',
            img:'@dataImage(370x490)'
        }
    }
})