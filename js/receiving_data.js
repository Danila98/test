
function getUser(ID) {
    BX24.callMethod(
        'user.get',     
        {
         'UF_DEPARTMENT[0]': ID     //получение ползьователей по департаменту
        }, 
        function(result) //запись ID пользователей в массив
        {
            if(result.error())
                console.error(result.error());
            else
                data = result.data()
                 //   console.log(data);
            for (let key in data) {                      //заходим в полученный массив из 50 ползьователей
                let obj = data[key];
                for(let dataKey in obj) {               //заходим в каждого пользователя 
                    if (dataKey == 'ID') {
                        userId.push(obj[dataKey]);             //записываем его ID
                            //    console.log(userId); // -  здесь все прпвильно 
                    }
                }
            }
            if(result.more())
            result.next();
                //    console.log(userId); 
                for (let i = 0 ; i < userId.length ; i++) {
                    let param = userId[i];
                    dataReceived(param);           // передаем ID ползователей в функцию 
                }
        }
          
    );  


}
function dataReceived(param) {                          //Функция получает сделки, по филтру пользователей 
    BX24.callMethod('crm.deal.list',         //получение сделок
    {
    filter:  {'ID' : param, },              // param берется из функции getUser
    select: ["UF_CRM_1576753760210",  "ID", "TITLE", ] 
    },
    function(result){
        if(result.error()) {
        alert('Ошибка запроса: ' + result.error());
    }
        else 
        //console.log(result.data());
            data = result.data();
            for (let key in data) {                 //Проходим по каждому полученному массиву
                let obj = data[key];    
                    for(let dataKey in obj){                 //Проходим по каждому полученному объекту массива
                     allCounter++;
                     if (dataKey == 'UF_CRM_1576753760210' && obj[dataKey] == 190 ) {                          //в стадии действубщий договор
                                                                                                //  Будем добавлять поля и фильторовать не по STAGE_ID, а по пользовательскому полю UF_CRM_1576753760210
                 //    console.log( "Ключ: " + dataKey + " значение: " + obj[dataKey] );
                        openCounter++;                                               //количество действующих сделок      
                    }       
                            if (dataKey == 'UF_CRM_1576753760210' && (obj[dataKey] == 192) ) {                     //в стадии сдан в ФРС Зареган договор
               // console.log( "Ключ: " + dataKey + " значение: " + obj[dataKey] );
                                   registeredCouner++;
                    
                            }              
                    }      
            }
                                if(result.more())
                                    result.next();
                         //  console.log(openCounter, registeredCouner);
                }
);
        // console.log(openCounter, registeredCouner) 'UF_CRM_1576753760210' пользовательское поле
            

}    