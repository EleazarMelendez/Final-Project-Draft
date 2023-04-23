export default function Menu() {
    return (
<div><input type="checkbox" id="menu" />
<label for="menu" class="menu">
	<span></span>
	<span></span>
	<span></span>
</label>

<nav class="nav">
	<ul>
		<li><a href="http://localhost:3000/">Main page</a></li>
		<li><a href="/dashboard">Personalized news</a></li>
		<li><a href="#">About this project</a></li>
		<li><a href="#">Acknowledgements</a></li>
	</ul>
</nav>
</div>
    )
    }