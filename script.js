$(document).ready(() => {
    $('.close-alert').click(()=>{
        $('.alert').alert('close')
    })

    $('.carousel').carousel({
        interval:3000
    })

    $('.carousel').on('slide.bs.carousel',(event)=>{
        console.log('slide:',`
            方向: ${event.direction}
            从:  ${event.from}
            到:   ${event.to}
        `)
    })

    const list=$('#tab-demo .list-group a')
    list.click(function (event) {
        event.preventDefault()
        $(this).tab('show')
    })

    $('[data-toggle="popover"]').popover()

    $('[data-toggle="tooltip"]').tooltip()
});
/**
 let arr = new Set('123456');
 arr.add('7')

 console.log(arr)
 console.log(arr.size)
 console.log(arr.has('2'));
 arr.delete('4')
 console.log(arr)

 arr.forEach(item => {
    console.log(item)
})

 arr.clear()
 console.log(arr)
 //箭头函数
 let arrowsFn = arguments => back;
 let arrowsFn = function arrowsFn(arguments) {
    return back
}

 let arrowsFn = (arguments1, arguments2) => back1 + back2;
 let arrowsFn = function arrowsFn(arguments1, arguments2) {
    return back1 + back2
}

 let arrowsFn = (arguments1, arguments2) => {
    return back1 + back2
};
 **/
