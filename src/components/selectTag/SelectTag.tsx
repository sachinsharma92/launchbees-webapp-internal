import { Select } from 'antd';
import React, { useState } from 'react';



//styles
import "./styles.scss"

const OPTIONS = ['Apples', 'Nails', 'Bananas', 'Helicopters'];

const SelectTag: React.FC = () => {
    const [selectedItems, setSelectedItems] = useState<string[]>([]);

    const filteredOptions = OPTIONS.filter(o => !selectedItems.includes(o));

    return (
        <Select
            mode="multiple"
            placeholder="Select options"
            value={selectedItems}
            onChange={setSelectedItems}
            className="filter-options"
            autoFocus
            style={{
                width: '100%',
            }}
            options={filteredOptions.map((item) => ({
                value: item,
                label: item,
            }))}
        />
    );
};

export default SelectTag;