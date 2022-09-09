const canvas = document.querySelector("canvas")

//context = paint brush
//2d 옵션으로 2d 그림을 그릴 수 있다. 다른 옵션은 3d 그림. 
const ctx = canvas.getContext("2d");

//캔버스가 얼마나 큰지 js에도 알려줘야 한다. 
canvas.width = 800;
canvas.height = 800;

//canvas의 좌표 시스템은 좌측 상단 0, 0 에서 시작한다. x축은 가로, y축은 세로. 
//context.fillRect 로 직사각형을 그릴 수 있다. 시작좌표(x,y),가로,세로길이
//단축 함수. 
//ctx.fillRect(50, 50, 100, 200)

// //.rect 로 선을 지정하고, fill로 채우거나 / stroke로 선만 그릴 수 있다. 
// ctx.rect(50, 50, 100, 100)
// ctx.rect(150, 150, 100, 100)
// ctx.fill()
// ctx.rect(250, 250, 100, 100)
// ctx.stroke()

// ctx.beginPath() //새 경로를 그려서 다른 사각형을 만든다. 
// ctx.rect(350, 350, 100, 100)
// ctx.rect(450, 450, 100, 100)
// ctx.fillStyle = 'red' //같은 경로 위에 있기 때문에 모두 색이 바뀌어버린다. 
// setTimeout(() => {
//     ctx.fill()
// }, 2000);
// //*우리가 그린 모든 그림의 경로를 기억해야 한다...

/*  하지만 rect 조차도 단축 함수였따....! ! !  */
//moveTo : painting brush의 좌표부터 옮긴다. 
ctx.moveTo(50, 50)
//lineTo : 현재 좌표에서 지정한 x, y 좌표까지 선을 그린다. 
ctx.lineTo(150, 50)
ctx.lineTo(150, 100)
ctx.lineTo(50, 100)
ctx.lineTo(50, 50)
ctx.stroke()
ctx.fill()





