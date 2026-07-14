const greeting = (strings, name) =>{
    const now = new Date();
    const timeperiod = now.getHours() <12 ? 'Morning' : now.getHours()
    <17? 'Evening' : 'Afternoon';
    return `Good ${timeperiod} ${name}${strings[1]}`;
};

const name = 'James';

console.log(greeting`Hello ${name} nice to meet you!`)