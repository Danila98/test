        function addSrting(openCounter, registeredCouner, allCounter, name) {
            let element = document.getElementById('report'); // поиск таблицы
            let row = document.createElement('TR'); //создание строк
            element.appendChild(row);

            let td1 = document.createElement("TD");    //создаем ячейки в строке
            let td2 = document.createElement("TD");
            let td3 = document.createElement("TD");
            let td4 = document.createElement("TD");
            let td5 = document.createElement("TD");
            let td6 = document.createElement("TD");
            let td7 = document.createElement("TD");
            let td8 = document.createElement("TD");
            let td9 = document.createElement("TD");
            let td10 = document.createElement("TD");

            row.appendChild(td1);
            row.appendChild(td2);
            row.appendChild(td3);
            row.appendChild(td4);
            row.appendChild(td5);
            row.appendChild(td6);
            row.appendChild(td7);
            row.appendChild(td8);
            row.appendChild(td9);
            row.appendChild(td10);
                                            //заполнение ячеек
            td1.innerHTML =  name;
            td2.innerHTML = openCounter;
            td3.innerHTML = registeredCouner;
            td4.innerHTML = openCounter + registeredCouner;
            td5.innerHTML = "text";
            td6.innerHTML = 'test';
            td7.innerHTML = 'test';
            td8.innerHTML = 'test';
            td9.innerHTML = allCounter;
            td10.innerHTML = 'test';

        }
