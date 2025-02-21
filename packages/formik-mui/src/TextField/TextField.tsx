import MuiTextField, { TextFieldProps } from '@material-ui/core/TextField';
import { useField } from 'formik';
import React from 'react';

/**
 * Formik field to edit text
 * Field value type: string
 */
export const TextField = ({ helperText, ...props }: TextFieldProps) => {
    // @ts-ignore
    const [field, meta] = useField(props.name);

    return (
        <MuiTextField
            {...field}
            {...props}
            helperText={meta.touched && meta.error ? meta.error : helperText}
            error={!!(meta.touched && meta.error)}
        />
    );
};
