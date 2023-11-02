import React from 'react';
import styled from 'styled-components';
import "../index.css"

export const Category = () => {

    return <DIV>
        <div id="category">
            <div className='box'>
                <div className="inner-box">
                    <div className="pic">
                        <div className='child bg-one'></div>
                    </div>
                </div>
                <h4>AI Art</h4>
            </div>
            <div className='box'>
                <div className="inner-box">
                    <div className="pic">
                        <div className='child bg-two'></div>
                    </div>
                </div>
                <h4>Digital Art</h4>
            </div>
            <div className='box'>
                <div className="inner-box">
                    <div className="pic">
                        <div className='child bg-three'></div>
                    </div>
                </div>
                <h4>Fan Art</h4>
            </div>
            <div className='box'>
                <div className="inner-box">
                    <div className="pic">
                        <div className='child bg-four'></div>
                    </div>
                </div>
                <h4>Photography</h4>
            </div>
            <div className='box'>
                <div className="inner-box">
                    <div className="pic">
                        <div className='child bg-five'></div>
                    </div>
                </div>
                <h4>fantasy</h4>
            </div>

        </div>

    </DIV>

}

const DIV = styled.div`
    

#category{
    width: 95%;
    display: flex;
   justify-content: space-evenly;
    margin: auto;
    font-family: 'Mulish', sans-serif;

}
.box{
    margin: auto;
    text-align: center;
}
.inner-box{
    width: 180px;
    height: 95px;
    border-radius: 20px;
    border: 3px solid #BE00FE;
    margin: auto;
}
.pic{
    width: 175px;
    height: 85px;
    border-radius: 20px;
    overflow: hidden;
    position: relative;
    display: inline-block;
    cursor: pointer;
    margin:2px;
}
.child{
    width: 100%;
    height: 100%;
    transition: 1.1s all;
    background-size:cover;
    margin:auto;
    border-radius: 20px;
}

.bg-one{
    background-image: url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/afa6e72c-8df3-4d8a-aba0-d3d8c0404e28/dgeejdd-113b4b84-d2ac-4e3b-8336-b02baf204158.jpg/v1/fill/w_250,h_250,q_70,strp/futuristic_mansion_by_roguedawg777_dgeejdd-250t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcL2FmYTZlNzJjLThkZjMtNGQ4YS1hYmEwLWQzZDhjMDQwNGUyOFwvZGdlZWpkZC0xMTNiNGI4NC1kMmFjLTRlM2ItODMzNi1iMDJiYWYyMDQxNTguanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.5htctlV5jIZ7v-yii72Vcz3g-e1-fHPNTnHNqCH9yy0);
 
}

.bg-two{
    background-image: url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3c81bf4c-53df-47dd-bd2d-0015c90567ba/dge6ldw-3a2e8af1-fba0-4118-8f62-3d9c34b6a171.jpg/v1/fit/w_414,h_276,q_70,strp/adorable_farm_wallpaper_digital_illustration_by_xrebelyellx_dge6ldw-414w.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzNjODFiZjRjLTUzZGYtNDdkZC1iZDJkLTAwMTVjOTA1NjdiYVwvZGdlNmxkdy0zYTJlOGFmMS1mYmEwLTQxMTgtOGY2Mi0zZDljMzRiNmExNzEuanBnIiwiaGVpZ2h0IjoiPD04NTQiLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS53YXRlcm1hcmsiXSwid21rIjp7InBhdGgiOiJcL3dtXC8zYzgxYmY0Yy01M2RmLTQ3ZGQtYmQyZC0wMDE1YzkwNTY3YmFcL3hyZWJlbHllbGx4LTQucG5nIiwib3BhY2l0eSI6OTUsInByb3BvcnRpb25zIjowLjQ1LCJncmF2aXR5IjoiY2VudGVyIn19.Z3FaYDxhTjaXc25ZueZjhCKsPx_MiGjiHQJXzGHTBSM);
}
.bg-three{
    background-image: url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/39442380-79a9-436f-ba2d-50506143597c/dgde6va-de8bb550-9ee4-4408-8924-53f868b4e91b.jpg/v1/fit/w_375,h_243,q_70,strp/spider_man_2_celebration__miles_morales_splash_by_the_fellow_dgde6va-375w.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjY0IiwicGF0aCI6IlwvZlwvMzk0NDIzODAtNzlhOS00MzZmLWJhMmQtNTA1MDYxNDM1OTdjXC9kZ2RlNnZhLWRlOGJiNTUwLTllZTQtNDQwOC04OTI0LTUzZjg2OGI0ZTkxYi5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.JMcYKVuKdNRhYSkj5W7QF4Opn6TIQkxNDwmYUX4AZxo);
}
.bg-four{
    background-image: url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c03839d6-5a63-47cf-830e-3a506235e717/dgdgxbx-b77015cb-ec2d-4c32-b370-ce4c40b5e735.jpg/v1/fill/w_700,h_295,q_70,strp/pumpkin___by_khurt_spencer_dgdgxbx-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2MwMzgzOWQ2LTVhNjMtNDdjZi04MzBlLTNhNTA2MjM1ZTcxN1wvZGdkZ3hieC1iNzcwMTVjYi1lYzJkLTRjMzItYjM3MC1jZTRjNDBiNWU3MzUuanBnIiwiaGVpZ2h0IjoiPD04MDgiLCJ3aWR0aCI6Ijw9MTkyMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS53YXRlcm1hcmsiXSwid21rIjp7InBhdGgiOiJcL3dtXC9jMDM4MzlkNi01YTYzLTQ3Y2YtODMwZS0zYTUwNjIzNWU3MTdcL2todXJ0LXNwZW5jZXItNC5wbmciLCJvcGFjaXR5Ijo5NSwicHJvcG9ydGlvbnMiOjAuNDUsImdyYXZpdHkiOiJjZW50ZXIifX0.43vYAOfE8_ucWoj-Oso0iS7Ju6iykeojSbALUrvmhKk);
}
.bg-five{
    background-image: url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5b8d661c-7b90-4791-a9d8-1383b2cbde2a/dgaas8f-fd01442c-4ed7-47c7-8dc7-0ac51f1e779e.jpg/v1/fill/w_525,h_350,q_70,strp/inwards_by_batjorge_dgaas8f-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA2NyIsInBhdGgiOiJcL2ZcLzViOGQ2NjFjLTdiOTAtNDc5MS1hOWQ4LTEzODNiMmNiZGUyYVwvZGdhYXM4Zi1mZDAxNDQyYy00ZWQ3LTQ3YzctOGRjNy0wYWM1MWYxZTc3OWUuanBnIiwid2lkdGgiOiI8PTE2MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.SmQxBM3_omMjM3KPFSUSdqtxmqU6S0ga2vYtwmxhNJ8);
}
.pic:hover .child{
    transform: scale(1.4);
}
h4{
font-size: 1.2rem;
}

@media screen and (min-width: 450px) and (max-width:1000px) {
    #category{
       display: grid;
       grid-template-columns: repeat(3,1fr);
       margin: auto;
    }
  }
`