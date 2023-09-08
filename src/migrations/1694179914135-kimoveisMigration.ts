import { MigrationInterface, QueryRunner } from "typeorm";

export class KimoveisMigration1694179914135 implements MigrationInterface {
    name = 'KimoveisMigration1694179914135'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "realEstates" RENAME COLUMN "updateAt" TO "updatedAt"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "realEstates" RENAME COLUMN "updatedAt" TO "updateAt"`);
    }

}
