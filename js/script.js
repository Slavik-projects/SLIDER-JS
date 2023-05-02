let position = 0;

const next = document.querySelector(".btn__next");
const prev = document.querySelector(".btn__prev");
const slider = document.querySelector(".slider");
const slidesToShow = 2;
const itemWidth = slider.clientWidth / slidesToShow;
const slidesToScroll = 3;
const items = document.querySelectorAll(".slider__item");
const itemsCount = items.length;//9
const movePos = itemWidth * slidesToScroll

items.forEach((item) => {
	item.style.minWidth = `${itemWidth}px`;
})

function moveNext(){
	const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
	console.log(itemsLeft)
	if(slidesToScroll <= itemsLeft){
		position -= movePos;
	}
	else{
		position -= itemsLeft * itemWidth;
	}
	slider.style.transform = `translateX(${position}px)`;
	console.log(position)
	checkBtns();
}
next.addEventListener("click", moveNext);

function movePrev(){
	console.log(position)

   const itemsLeft = Math.abs(position) / itemWidth;
	console.log(itemsLeft)
	if(slidesToScroll <= itemsLeft){
		position += movePos;
	}
	else{
		position += itemsLeft * itemWidth;
	}
	slider.style.transform = `translateX(${position}px)`;
	checkBtns();
}
prev.addEventListener("click", movePrev);

const checkBtns = () => {
	prev.disabled = position === 0;
	next.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
}

checkBtns();