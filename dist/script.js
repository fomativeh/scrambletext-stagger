const animation = gsap.timeline({id:"stats", repeat:1, repeatDelay:1});
const lists = gsap.utils.toArray("li")

lists.forEach((eachList, index) => {
	let text = eachList.innerText
	eachList.innerText = ""
	let tl = gsap.timeline()
	.set(eachList, {opacity:1})
	.to(eachList, {
		scrambleText:{
			text:text,
			newClass:"purple",
			oldClass:"cyan",
		}
	})
	animation.add(tl, index * 0.2)
})
GSDevTools.create({ animation});