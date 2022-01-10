import React from "react";
import CollapseWrapper from "../common/collapse";
import Divider from "../common/divider";
import SmallTitle from "../common/typografy/smallTitle";
import PropTypes from "prop-types";

const ChildrenExercise = () => {
    const List = ({ children }) => {
        return (
            <ol>
                {React.Children.map(children, (child) => {
                    return <li>{React.cloneElement(child)}</li>;
                })}
            </ol>
        );
    };

    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них добавить порядковый номер,
                относительно того, как они располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и <code>React.Children.toArray</code>
            </p>

            <Component />
            <Component />
            <Component />
            <Divider />
            <SmallTitle>Решение</SmallTitle>
            <Divider />
            <List>
                <Component />
                <Component />
                <Component />
            </List>
        </CollapseWrapper>
    );
};

const Component = () => {
    return <div>Компонент списка</div>;
};

ChildrenExercise.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};

export default ChildrenExercise;
