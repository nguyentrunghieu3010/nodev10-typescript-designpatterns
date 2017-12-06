var _ = require('lodash');
function concatArrays() {
    var other = _.concat([1], 2, [3], [[4]]);
    console.log(other);
}
function filterArrayJsonObject() {
    var data = [
        {
            "description": "Insurance",
            "excluded": false,
            "id": 6151,
            "key": "INSURANCE"
        },
        {
            "description": "General",
            "excluded": false,
            "id": 56,
            "key": "GENERAL"
        },
        {
            "description": "Financial Planning",
            "excluded": true,
            "id": 55,
            "key": "FINANCIAL PLANNING"
        },
        {
            "description": "Investment Proposal",
            "excluded": false,
            "id": 54,
            "key": "INVESTMENT PROPOSAL"
        },
        {
            "description": "Product",
            "excluded": false,
            "id": 53,
            "key": "PRODUCT"
        },
        {
            "description": "Customer Care",
            "excluded": false,
            "id": 52,
            "key": "CUSTOMER CARE"
        },
        {
            "description": "Asset Allocation",
            "excluded": false,
            "id": 51,
            "key": "ASSET ALLOCATION"
        }
    ];
    // let data = [
    //     {'user': 'barney', 'active': false},
    //     {'user': 'fred', 'active': false},
    //     {'user': 'pebbles', 'active': true}
    // ];
    console.log("Before filter", data.length);
    // return _.dropRightWhile(data, (resp) =>{
    //      return !resp.excluded;
    //  });
    var dataResp = _.filter(data, ['excluded', false]);
    console.log("After filter", dataResp.length);
    return dataResp;
}
function groupingByFirstLetter() {
    var jsonData = [
        {
            "type": "specialListDTO",
            "firstName": "Bruno",
            "fullName": "Bruno Mars",
            "lastName": "Mars",
            "middleName": "",
            "status": "ACTIVE",
            "userName": "bruno@finantix.com"
        },
        {
            "type": "specialListDTO",
            "firstName": "Chris",
            "fullName": "Chris Brown",
            "lastName": "Brown",
            "middleName": "",
            "status": "ACTIVE",
            "userName": "agent@finantix.com"
        },
        {
            "type": "specialListDTO",
            "firstName": "Jenifer",
            "fullName": "Jenifer Lopez",
            "lastName": "Lopez",
            "middleName": "",
            "status": "INACTIVE",
            "userName": "jenifer@finantix.com"
        },
        {
            "type": "specialListDTO",
            "firstName": "Justin",
            "fullName": "Justin Bieber",
            "lastName": "Bieber",
            "middleName": "",
            "status": "ACTIVE",
            "userName": "justin@finantix.com"
        },
        {
            "type": "specialListDTO",
            "firstName": "Katy",
            "fullName": "Katy Perry",
            "lastName": "Perry",
            "middleName": "",
            "status": "ACTIVE",
            "userName": "katy@finantix.com"
        },
        {
            "type": "specialListDTO",
            "firstName": "Chen",
            "fullName": "Rita  Chen",
            "lastName": "Rita",
            "middleName": "",
            "status": "ACTIVE",
            "userName": "rita0403@finantix.com"
        }
    ];
    var groupData = _.groupBy(jsonData, function (item) {
        return item.fullName[0];
    });
    _.forEach(groupData, function (item, index) {
        console.log('item', item);
        console.log('index type:', index);
    });
}
console.log(groupingByFirstLetter());
console.log(filterArrayJsonObject());
