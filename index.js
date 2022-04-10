import reactdom from 'react-dom'
import Card from'./card/cards'
import Navbar from'./Navbar'
import '../node_modules/bootstrap/dist/css/bootstrap.css'

reactdom.render(<div>
    <Navbar/>
    <Card/>
</div>,document.getElementById("asd"));