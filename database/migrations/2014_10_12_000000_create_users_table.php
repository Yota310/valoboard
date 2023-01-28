<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('profile')->nullable();
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->integer("age")->nullable();
            $table->integer('moral')->nullable(); //モラルテーブルで計算したものを保存する
            $table->string('sns_name')->nullable();
            $table->string('sns_url')->nullable();
            $table->string('image_path')->nullable();
            $table->foreignId('rank_id')->nullable()->constrained('ranks');
            $table->foreignId('role_id')->nullable()->constrained('roles');
            $table->foreignId('time_id')->nullable()->constrained('times');
            $table->foreignId('stance_id')->nullable()->constrained('stances');
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
};
