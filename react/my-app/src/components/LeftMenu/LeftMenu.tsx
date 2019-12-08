import React from 'react'
import { Link } from 'react-router-dom'

const LeftMenu: React.FC = () => {
    return (
        <div className="left-block">
            <h3>Категории:</h3>
            <hr/>
            <Link to="/category/1">Недвижимость</Link><br/>
            <Link to="/category/2">Транспорт</Link><br/>
            <Link to="/category/3">Работа</Link><br/>
            <Link to="/category/4">Бытовая электроника</Link><br/>
            <Link to="/category/5">Животные</Link><br/>
            <Link to="/category/6">Хобби и отдых</Link><br/>
            <Link to="/category/7">Для дома и дачи</Link><br/>
        </div>
    )
};

export default LeftMenu