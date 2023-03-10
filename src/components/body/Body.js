import { Routes, Route } from "react-router-dom";
import Main from "../../pages/Main";
import Items from "../../pages/Items";
import ModelHouse from "../../pages/ModelHouse";
import Cart from '../../pages/Cart';

function Body() {
    // 경로에 따라 다른 컴포넌트를 렌더링함
    return (
        <div>
                <Routes>
	                <Route path='/' element={   // 메인 페이지
                        <div> 
                            <Main />
                        </div>} />
                    <Route path='/items' element={ // 상품 페이지
                        <div> 
                            <Items />
                        </div>} />
                    <Route path='/modelhouses' element={ // 세트장 페이지
                        <div> 
                            <ModelHouse />
                        </div>} />
                    <Route path='/cart' element={  // 장바구니 페이지
                        <div>
                            <Cart />
                        </div>} />
                    <Route path='*' element={ // 없는 페이지 (잘못된 경로로 간 경우)
                        <div> 
                            없는 페이지
                        </div>} />
                </Routes>                



        </div>
    )
}

export default Body;