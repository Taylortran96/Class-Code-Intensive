

export default  function MenuComponent(){
    return(
        <div className="menu-component" 
        style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textTransform:'uppercase',
            fontSize: '20px',
        }}>
            <i>nut home</i>
            <p>Xã hội</p>
            <p>Chứng khoán</p>
            <p>Bất động sản</p>
            <p>Doanh nghiệp</p>
            <p>Ngân hàng</p>
            <p>Tài chính Quốc tế</p>
            <p>Vĩ Mô</p>
            <p>Kinh tế số</p>
            <p>Lifestyle</p>
        </div>
    )
}