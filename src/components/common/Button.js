import * as React from 'react';
import Button from '@mui/material/Button';

export default function BasicButtons({title}) {
    return (
        <Button type="submit" variant="contained">{title}</Button>
    );
}