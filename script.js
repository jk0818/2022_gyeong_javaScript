function save(data) {
    localStorage.setItem('data2', data);
    sessionStorage.setItem('data2', data);
}

save('bye');