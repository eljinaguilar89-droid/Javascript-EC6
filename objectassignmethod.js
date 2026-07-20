const requestTemplate = {
    url: 'http://localhost',
    params: 'search=test',
    auth: { name: 'James',
            password: 'password123'
    }
};

const details = {time: '11:30', user: 'james'};

const customerRequest =
    Object.assign({}, requestTemplate, details)
requestTemplate.auth.name = 'Hamza';
console.log(requestTemplate)
console.log(customerRequest)