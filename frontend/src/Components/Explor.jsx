import React from 'react'
import styled from 'styled-components'

export const Explor = () => {
    return (
        <DIV>
            <div className='one'>
                <img className="child" src="https://img.freepik.com/free-vector/diwali-festival-celebration-background_52683-94336.jpg?t=st=1698828761~exp=1698829361~hmac=887db246f9981fa2feac9ca3b6fadada3a6574c94a386beef2af1181dac8a300" alt="explore photo" />
                <h4 className='heading'>Diwali inspiration</h4>
            </div>

            <div className='two card'>
                <img className="child" src="https://img.freepik.com/free-vector/diwali-festival-celebration-background_52683-94336.jpg?t=st=1698828761~exp=1698829361~hmac=887db246f9981fa2feac9ca3b6fadada3a6574c94a386beef2af1181dac8a300" alt="explore photo" />
                <h4 className='heading'>Diwali inspiration</h4>
            </div>
            <div className='three card'>
                <img className="child" src="https://img.freepik.com/free-photo/close-up-creepy-forest-creature_23-2150872686.jpg?size=626&ext=jpg" alt="explore photo" />
                <h4 className='heading'>Diwali inspiration</h4>

            </div>
            <div className='four card'>
                <img className="child" src="https://img.freepik.com/premium-vector/dia-de-los-muertos-cartoon-illustration_52683-47384.jpg?size=626&ext=jpg" alt="explore photo" />
                <h4 className='heading'>Diwali inspiration</h4>

            </div>
            <div className='five card'>
                <img className="child" src="https://img.freepik.com/free-vector/diwali-festival-celebration-background_52683-94336.jpg?t=st=1698828761~exp=1698829361~hmac=887db246f9981fa2feac9ca3b6fadada3a6574c94a386beef2af1181dac8a300" alt="explore photo" />

                <h4 className='heading'>Diwali inspiration</h4>

            </div>

            <div className='six card'>
                <img className="child" src="https://img.freepik.com/premium-photo/photo-dia-de-los-muertos-portrait-young-woman-with-sugar-skull-makeup-portrait-calavera_744422-7040.jpg?size=626&ext=jpg" alt="explore photo" />

                <h4 className='heading'>Diwali inspiration</h4>
            </div>
            <div className='seven card'>
                <img className="child" src="https://img.freepik.com/free-photo/candles-many-burning-candles-dark-yellow-candles-black-background_8353-6564.jpg?size=626&ext=jpg" alt="explore photo" />

                <h4 className='heading'>Diwali inspiration</h4>

            </div>
            <div className='eight card'>
                <img className="child" src="https://img.freepik.com/free-vector/diwali-festival-celebration-background_52683-94336.jpg?t=st=1698828761~exp=1698829361~hmac=887db246f9981fa2feac9ca3b6fadada3a6574c94a386beef2af1181dac8a300" alt="explore photo" />

                <h4 className='heading'>Diwali inspiration</h4>

            </div>
            <div className='nine card'>
                <img className="child" src="https://img.freepik.com/free-photo/fresh-vegetable-salad-with-organic-healthy-ingredients-generated-by-ai_24640-80535.jpg?size=626&ext=jpg" alt="explore photo" />

                <h4 className='heading'>Diwali inspiration</h4>

            </div>

        </DIV>
    )
}


const DIV = styled.div`
    
    width: 90%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-areas:
    "one one two three"
    "one one four five"
    "six seven eight nine"
    ;
    gap:10px;
    margin:auto;
    text-align: center;


img{
    width: 100%;
    height: 80%;
    display:block;
    margin: auto;
}

.card{
    background-size:cover;
}
.card h4{
    position: absolute;

}
.one{
 grid-area: one;
 border: 1px solid black;
 
}


`
