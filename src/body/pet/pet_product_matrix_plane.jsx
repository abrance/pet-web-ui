import React from 'react'
import PetProductMatrixStorePlane from "./pet_product_matrix_store_plane";
import PetProductNavbar from "./pet_product_nav_bar";

class PetProductMatrixPlane extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        const smallSloganStyle = {
            fontSize: '14px',
            fontFamily: 'ui-sans-serif',
            padding: '50px',
            fontWeight: 'bold'
        }
        const bigSloganStyle = {
            marginBottom: '0px',
            fontSize: '40px',
            fontWeight: 'bold',
            fontFamily: 'ui-sans-serif',
        }
        const BlankDivStyle = {
            height: '150px'
        }
        const petProductNavbarStyle = {
            margin: '30px 10%'
        }

        const smallSlogan = 'OUR PRODUCTS'
        const bigSlogan1 = 'FLIPOS 产品矩阵'
        const bigSlogan2 = 'POS + 小程序 + CRM'
        return (
            <div>
                <div style={smallSloganStyle}>
                    {smallSlogan}
                </div>
                <div style={bigSloganStyle}>
                    {bigSlogan1}
                </div>
                <div style={bigSloganStyle}>
                    {bigSlogan2}
                </div>
                <div style={BlankDivStyle}>
                </div>
                <div style={petProductNavbarStyle}>
                    <PetProductNavbar />
                </div>

                {/*<PetProductMatrixStorePlane />*/}
            </div>
        )
    }
}

export default PetProductMatrixPlane
