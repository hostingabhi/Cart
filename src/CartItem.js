import React from 'react';
class CartIteam extends React.Component {
    render() {
        return (
            <div className="cart-iteam">
                <div className="left-block">
                    <img style={styles.image} />
                </div>
                <div className="right-block">
                    <div style={{ fontSize: 25 }}> Phone</div>
                    <div style={{ color: 'blue'}}>RS 999</div>
                    <div style={{ color: 'orange' }}>Qty: 1</div>
                    <div className="cart-item-actions">
                        {/* Buttons */}
                    </div>

                </div>

            </div>
        );
    }
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: 'grey'
    }
}
export default CartIteam;