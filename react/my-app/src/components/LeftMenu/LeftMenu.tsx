import React from 'react'
import { Link } from 'react-router-dom'

const LeftMenu: React.FC = () => {
    return (
        <div className="left-block">
            <h3>Категории:</h3>
            <hr/>
            <Link to="/">Недвижимость</Link><br/>
            <Link to="/">Транспорт</Link><br/>
            <Link to="/">Работа</Link><br/>
            <Link to="/">Бытовая электроника</Link><br/>
            <Link to="/">Животные</Link><br/>
            <Link to="/">Хобби и отдых</Link><br/>
            <Link to="/">Для дома и дачи</Link><br/>
        </div>
    )
};

export default LeftMenu