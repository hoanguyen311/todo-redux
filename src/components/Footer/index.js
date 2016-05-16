import React from 'react';
import FilterButton from '../FilterButton';
import ClearCompletedButton from '~/components/ClearCompleted';

export default class extends React.Component {
    render() {
        return (
            <footer>
                <div className="btn-group">
                    <FilterButton filterType="SHOW_ALL">
                        All
                    </FilterButton>
                    <FilterButton filterType="SHOW_ACTIVE">
                        Active
                    </FilterButton>
                    <FilterButton filterType="SHOW_COMPLETED">
                        Completed
                    </FilterButton>
                </div>
                <span className="pull-right">
                    <ClearCompletedButton modifierClass="btn-success">
                        Clear Completed
                    </ClearCompletedButton>
                </span>
            </footer>
        );
    }
}
