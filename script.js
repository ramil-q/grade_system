$('#name').on('focus', function () {
    $('.inp').css('border', '2px solid #719ECE');
    $('.inp').css('background-color', '#719ECE');
})
$('#name').on('blur', function () {
    $('.inp').css('border', 'none');
    $('.inp').css('background-color', '#fff');
})




var siyahi = [];

function first(){
    var valuesdiv = $('.values');
    valuesdiv.empty();
    
    for (let i = 0; i < siyahi.length; i++) {
        valuesdiv.append(`<tr>
        <td>${i + 1}</td>
        <td>${siyahi[i].telebeAdi}</td>
        <td><a href="" type="button" class="imtahan">Imtahan</a></td>
        <td>${siyahi[i].minValue}</td>
        <td>${siyahi[i].maxValue}</td>
        <td>${siyahi[i].averageValue}</td>
    </tr>`)
    }
    console.log(siyahi)
}
$('.btnmain').on('click', () => {
    var telebeAdi = $('#name').val();
    siyahi.push({ 
        telebeAdi:telebeAdi,
        maxValue:'',
        minValue:'',
        averageValue:''
     });
    first();
})
$(document).on('click', '.imtahan', (event) => {
    event.preventDefault();
    $('.popup').css('display', 'block');
    $('body').css('background-color', 'rgb(117, 114, 114)')
})

$('#select').on('focus', () => {
    $('.selectdiv').css('background-color', '#719ECE');
})
$('#select').on('blur', () => {
    $('.selectdiv').css('background-color', '#fff');
})

$('#qiymet').on('focus', () => {
    $('.selectdiv').css('background-color', '#719ECE');
})
$('#qiymet').on('blur', () => {
    $('.selectdiv').css('background-color', '#fff');
})

var qiymetler = [];
var grades = [];
$('.btnpopup').on('click', () => {
    $('.valuespopup').empty();
    const selectval = $('#select :selected').text();
    const inpqiymet = $('#qiymet').val();
    grades.push(inpqiymet);
    qiymetler.push({
        selectval,
        inpqiymet
    })
    console.log(qiymetler);
    for (let i = 0; i < qiymetler.length; i++) {
        $('.valuespopup').append(` <tr>
    <td>${i + 1}</td>
    <td>${qiymetler[i].selectval}</td>
    <td>${qiymetler[i].inpqiymet}</td>
</tr>`)
    }

})

$('.btnclose').on('click', () => {
    $('.popup').css('display', 'none')
    $('body').css('background-color', '#fff')
    var maxValue = Math.max(...grades);
    var minValue = Math.min(...grades);
    var sum=0;
    for(let i = 0;i<grades.length;i++){
        sum+=parseInt(grades[i]);
        var averageValue = sum/grades.length;
    }
    console.log(averageValue);
    
    for(let i = 0;i<siyahi.length;i++){
        siyahi[i].maxValue = maxValue;
        siyahi[i].minValue = minValue;
        siyahi[i].averageValue = averageValue;
    }

    first();
    $('.valuespopup').empty();
    qiymetler=[];
    grades=[];
    console.log(siyahi)
})