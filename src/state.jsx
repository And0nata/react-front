const user = {
    id: "1",
    name: "Иван",
    lastname: "Иванов",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=300&q=80",
    about: "Рассказ о себе",
    email: "ivan@ivanov.ru"
};

const users = {
    0: {name:"Сергей", lastname: "Иванов"},
    1: {name:"Валерия", lastname: "Теплякова"},
    2: {name:"Александра", lastname: "Константинова"},
    3: {name:"Семен", lastname: "Семенов"},
    4: {name:"Надежда", lastname: "Верова"}
}

export function getUser() {
    return user;
}
export function getUsers() {
    return users;
}