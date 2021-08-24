AOS.init({
    duration:500,
    delay:300
});

new Splide( '.splide',

{
    type:"loop",
    autoplay:true
}

).mount();
document.getElementById('l2').addEventListener('click',()=>{
    if(document.querySelector('.mnav-2').classList.contains('mm'))
    {
        document.querySelector('.mnav-2').classList.toggle('mm');
    }
    document.querySelector('.mnav-1').classList.toggle('mm');
})
document.getElementById('l3').addEventListener('click',()=>{
    if(document.querySelector('.mnav-1').classList.contains('mm'))
    {
        document.querySelector('.mnav-1').classList.toggle('mm');
    }
    document.querySelector('.mnav-2').classList.toggle('mm');
})
document.addEventListener('mouseup',(e)=>{
    if(document.querySelector('.mnav-1').classList.contains('mm'))
    {
        if(!document.querySelector('.mnav-1').contains(e.target) && !document.getElementById('l2').contains(e.target))
        {
            document.querySelector('.mnav-1').classList.toggle('mm');
        }
    }
    if(document.querySelector('.mnav-2').classList.contains('mm'))
    {
        if(!document.querySelector('.mnav-2').contains(e.target) && !document.getElementById('l3').contains(e.target))
        {
            document.querySelector('.mnav-2').classList.toggle('mm');
        }
    }
})
for(i of document.querySelector('.mnav3').children)
{
    i.addEventListener('click',()=>{
        document.querySelector('.mnav-2').classList.toggle('mm');
    })
}
document.getElementById('l1').addEventListener('click',()=>{
    if(document.getElementById('dark').classList.contains('active')){
        document.getElementById('dark').classList.remove('active');
        document.getElementById('dark').style.display='none';
        document.getElementById('light').classList.add('active');
        document.getElementById('light').style.display='block';
        document.querySelector('.navbar').classList.add('dcolor1');
        document.querySelector('.mid-i').classList.add('dcolor2');
        document.querySelector('.mid-img').classList.add('dcolor3');
        document.querySelector('.logo-a').classList.add('dcolor4');
        document.querySelector('.main').classList.add('dcolor2');
        document.querySelector('.main').classList.add('dcolor6');
        for(i of document.querySelectorAll('.home-btn'))
        {
            i.classList.add('dcolor5');
        }
        for(i of document.querySelectorAll('.home21-i'))
        {
            i.classList.add('dcolor2');
        }
        for(i of document.querySelectorAll('.card'))
        {
            i.classList.add('dcolor1');
        }
        for(i of document.querySelectorAll('.ser-card'))
        {
            i.classList.add('dcolor1');
        }
        for(i of document.querySelectorAll('.pr-card'))
        {
            i.classList.add('dcolor1');
        }
        for(i of document.querySelectorAll('.pr-card1'))
        {
            i.classList.add('dcolor2');
        }
        for(i of document.querySelectorAll('.blog-card'))
        {
            i.classList.add('dcolor1');
        }
        for(i of document.querySelectorAll('.splide__slide'))
        {
            i.classList.add('dcolor1');
        }
        for(i of document.querySelectorAll('.con11-i'))
        {
            i.classList.add('dcolor1');
            i.classList.add('dcolor6');
        }
        for(i of document.querySelectorAll('.foot-a'))
        {
            i.classList.add('dcolor6');
        }
        for(i of document.querySelectorAll('.mnav'))
        {
            i.classList.add('dcolor1');
        }
        for(i of document.querySelectorAll('.mnav11-i'))
        {
            i.classList.add('dcolor2');
        }
        for(i of document.querySelectorAll('.mnav1-a'))
        {
            i.classList.add('dcolor6');
        }
        document.querySelector('.home2').classList.add('dcolor1');
        document.querySelector('.footer').classList.add('dcolor2');
        document.querySelector('.hiten').classList.add('dcolor4');
        document.querySelector('.logo-img').classList.add('dcolor3');
    }
    else
    {
        document.getElementById('dark').classList.add('active');
        document.getElementById('dark').style.display='block';
        document.getElementById('light').classList.remove('active');
        document.getElementById('light').style.display='none';
        document.querySelector('.navbar').classList.remove('dcolor1');
        document.querySelector('.mid-i').classList.remove('dcolor2');
        document.querySelector('.mid-img').classList.remove('dcolor3');
        document.querySelector('.logo-a').classList.remove('dcolor4');
        document.querySelector('.main').classList.remove('dcolor2');
        document.querySelector('.main').classList.remove('dcolor6');
        for(i of document.querySelectorAll('.home-btn'))
        {
            i.classList.remove('dcolor5');
        }
        for(i of document.querySelectorAll('.home21-i'))
        {
            i.classList.remove('dcolor2');
        }
        for(i of document.querySelectorAll('.card'))
        {
            i.classList.remove('dcolor1');
        }
        for(i of document.querySelectorAll('.ser-card'))
        {
            i.classList.remove('dcolor1');
        }
        for(i of document.querySelectorAll('.pr-card'))
        {
            i.classList.remove('dcolor1');
        }
        for(i of document.querySelectorAll('.pr-card1'))
        {
            i.classList.remove('dcolor2');
        }
        for(i of document.querySelectorAll('.blog-card'))
        {
            i.classList.remove('dcolor1');
        }
        for(i of document.querySelectorAll('.splide__slide'))
        {
            i.classList.remove('dcolor1');
        }
        for(i of document.querySelectorAll('.con11-i'))
        {
            i.classList.remove('dcolor1');
            i.classList.remove('dcolor6');
        }
        for(i of document.querySelectorAll('.foot-a'))
        {
            i.classList.remove('dcolor6');
        }
        for(i of document.querySelectorAll('.mnav'))
        {
            i.classList.remove('dcolor1');
        }
        for(i of document.querySelectorAll('.mnav11-i'))
        {
            i.classList.remove('dcolor2');
        }
        for(i of document.querySelectorAll('.mnav1-a'))
        {
            i.classList.remove('dcolor6');
        }
        document.querySelector('.home2').classList.remove('dcolor1');
        document.querySelector('.footer').classList.remove('dcolor2');
        document.querySelector('.hiten').classList.remove('dcolor4');
        document.querySelector('.logo-img').classList.remove('dcolor3');
    }
})