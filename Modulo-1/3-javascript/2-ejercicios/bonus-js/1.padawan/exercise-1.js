const ageGroups = (users) => {
    const underAgeUsers = [];
    const legalAgeUsers = [];

    for (let user of users){
        if(user.years >= 18) legalAgeUsers.push(user);
        else underAgeUsers.push(user);
    }

    console.log("Usuarios menores de edad:", underAgeUsers);
    console.log("Usuarios mayores de edad:", legalAgeUsers);
}