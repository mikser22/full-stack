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
                {/*<a href="index.html">Транспорт</a><br/>*/}
                {/*<a href="index.html">Работа</a><br/>*/}
                {/*<a href="index.html">Бытовая электроника</a><br/>*/}
                {/*<a href="index.html">Животные</a><br/>*/}
                {/*<a href="index.html">Хобби и отдых</a><br/>*/}
                {/*<a href="index.html">Для дома и дачи</a><br/>*/}


        </div>
    )
};

export default LeftMenu