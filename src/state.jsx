const user = {
    id: "1",
    name: "Иван",
    lastname: "Иванов",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=300&q=80",
    about: "Рассказ о себе",
    email: "ivan@ivanov.ru"
};

const users = {
    0: {id:5, name:"Сергей", lastname: "Иванов", email: "Ser@isValidElement.ru", avatar:"https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fHww&w=300&q=80"},
    1: {id:43, name:"Валерия", lastname: "Теплякова", email: "tepl@lyak.ru", avatar:"https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuJTIwYXZhdGFyfGVufDB8fDB8fHww&w=300&q=80"},
    2: {id: 12, name:"Александра", lastname: "Константинова", email:"Konst@antil.com", avatar:"https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fHww&w=300&q=80"},
    3: {id:7, name:"Семен", lastname: "Семенов", email:"Sem@yon.ru", avatar:"https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHBlcnNvbmF8ZW58MHx8MHx8fDA%3D&w=300&q=80"},
    4: {id: 49, name:"Надежда", lastname: "Верова", email:"ver@ova.com", avatar:"https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuJTIwYXZhdGFyfGVufDB8fDB8fHww&w=300&q=80"}
}

export function getUser(userId) {
    for(let i=0; i<Object.keys(users).length; i++) {
        if(users[i].id==userId) return users[i];
    } 
    return user;
}
export function getUsers() {
    return users;
}