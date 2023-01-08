import { TextControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import {
    useBlockProps,
    ColorPalette,
    InspectorControls,
} from '@wordpress/block-editor';

import './editor.scss';

export default function Edit( { attributes, isSelected, setAttributes } ) {
    const blockProps = useBlockProps();
	const onChangeBGColor = ( hexColor ) => {
		setAttributes( { bg_color: hexColor } );
	};

	const onChangeTextColor = ( hexColor ) => {
		setAttributes( { text_color: hexColor } );
	};

	return (
		<div { ...useBlockProps() }>
		{ attributes.message && ! isSelected ?
		(
			<div style={ {
				backgroundColor: attributes.bg_color,
				color: attributes.text_color,
			} }>{ attributes.message }</div>
		) : (
			<div>
			<InspectorControls key="setting">
				<div id="blp-filters-controls">
					<fieldset>
						<legend className="blocks-base-control__label">
							{ __( 'Background color', 'blp-filters' ) }
						</legend>
						<ColorPalette // Element Tag for Gutenberg standard colour selector
							onChange={ onChangeBGColor } // onChange event callback
						/>
					</fieldset>
					<fieldset>
						<legend className="blocks-base-control__label">
							{ __( 'Text color', 'blp-filters' ) }
						</legend>
						<ColorPalette // Element Tag for Gutenberg standard colour selector
							onChange={ onChangeTextColor } // onChange event callback
						/>
					</fieldset>
				</div>
			</InspectorControls>

			<TextControl
				{ ...blockProps }
				value={ attributes.message }
				onChange={ ( val ) => setAttributes( { message: val } ) }
			/>
			</div>
		) }
		</div>
	);
}
