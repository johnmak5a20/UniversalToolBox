import commonStyle from '../css/common.css'
import mainStyle from '../css/pages/main.css'

export default class dropDown
{
	constructor( dropDownBtnIdList, dropDownStyleObj )
	{
		this.dropDownBtnIdList = dropDownBtnIdList;
		this.dropDownStyleObj = dropDownStyleObj;
		this.init();
	}
	
	init()
	{
		let dropDownListStyle = this.dropDownStyleObj[ 'dropDownListContainer' ];
		let dropDownListItemStyle = this.dropDownStyleObj[ 'dropDownListItem' ];
		
		if ( dropDownListStyle && dropDownListItemStyle )
		{
			let dropdownHtmlStr = '<div class="' + dropDownListStyle + '">';
			
			if ( this.dropDownBtnIdList.length > 0 )
			{
				let dropDownContainer =  this.dropDownBtnIdList[ 0 ];
				let initDropDownVal = '';
				
				this.dropDownBtnIdList.forEach( ( dropDownBtnId ) => 
				{
					$( '#' + dropDownBtnId ).find( 'select' ).find( 'option' ).each( ( i, elem ) => 
					{
						if ( i === 0 )
						{ 
							$( '#' + dropDownContainer + ' span:first-child' ).text ( $( elem )[ 0 ].innerHTML );
							initDropDownVal = $( elem )[ 0 ].innerHTML;
						}
					
						dropdownHtmlStr += '<div class="' + dropDownListItemStyle + '">' + $( elem )[ 0 ].innerHTML + '</div>';
					} );
					
					dropdownHtmlStr += '</div>';
					
					$( '#' + dropDownBtnId ).after( dropdownHtmlStr );
					$( '#' + dropDownBtnId ).on( 'click', this.openDropdown.bind( this ) );
					$( '#' + dropDownBtnId + '+ div.' + dropDownListStyle + ' div.' + dropDownListItemStyle ).on( 'click', this.selectItem.bind( this ) );
					
					this.dropDownVal = initDropDownVal;
				} );
			}
		}
		else
		{
			throw 'Missing Parameter';
		}
	}
	
	openDropdown()
	{
		$( event.currentTarget ).next( 'div.' + this.dropDownStyleObj[ 'dropDownListContainer' ] ).css( 'display', 'block' );
	}

	closeDropdown()
	{
		$( event.currentTarget ).parent( 'div.' + this.dropDownStyleObj[ 'dropDownListContainer' ] ).css( 'display', 'none' );
	}
	
	selectItem()
	{
		let selectedVal = $( event.currentTarget ).text();
		let dropDownBtn = $( event.currentTarget ).parent().prev();
		
		if ( dropDownBtn.find( 'select' ).length > 0 )
		{
			dropDownBtn.find( 'span.selected-value' ).text( selectedVal );
		}
		else if ( dropDownBtn.find( 'i' ).length > 0 )
		{
			let subDropDown = dropDownBtn[ 0 ].id;
			let otherMainDropDownIds = this.dropDownBtnIdList.filter( ( dropDownBtnId ) => 
			{
				return dropDownBtnId !== subDropDown;
			} );
			
			otherMainDropDownIds.forEach( ( dropDownBtnId ) => 
			{
				$( '#' + dropDownBtnId ).find( 'span.selected-value' ).text( selectedVal );
			} );
		}
		
		this.dropDownVal = selectedVal;
		this.closeDropdown();
	}
	
	getDropDownVal()
	{
		return this.dropDownVal;
	}
}
