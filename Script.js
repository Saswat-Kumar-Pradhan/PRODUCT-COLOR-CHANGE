function color(c)
{
    let x=document.getElementsByClassName('pic-color')
    x[0].style.background=c
}
function custom()
{
    let y=document.getElementById('ccode').value;
    let x=document.getElementsByClassName('pic-color')
    x[0].style.background=y;
}
function sucessful()
{
    alert("Product is added to the cart sucessfully")
}