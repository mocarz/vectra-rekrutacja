import { IsString, IsNotEmpty, Length, IsIn } from 'class-validator';
import { IsFirstCharacterUpperCase } from 'src/common/validators/first-character-upper-case-validator';
import { IsValidPesel } from 'src/common/validators/pesel-validator';

/**
 * DTO object for requesting pdf
 */
export class PdfRequestDto {
	@IsNotEmpty()
	@IsString()
	@IsIn(['Pan', 'Pani'])
	title: string;

	@IsNotEmpty()
	@IsString()
	@IsFirstCharacterUpperCase()
	name: string;

	@IsNotEmpty()
	@IsString()
	@IsFirstCharacterUpperCase()
	surname: string;

	@IsNotEmpty()
	@Length(11, 11)
	@IsValidPesel()
	identityNumber: string;

	@IsNotEmpty()
	templateName: string;
}
