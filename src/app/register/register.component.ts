import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      email: [''],
      senha: [''],
      endereco: [''],
      complemento: [''],
      cidade: [''],
      estado: [''],
      cep: [''],
      receberPromocoes: [false],
      aceitarTermos: [false],
    });
  }

  onSubmit() {
    if (!this.registerForm.value.aceitarTermos) {//caso não marque a opção dos termos
      alert('Você precisa aceitar os Termos e Condições.');
      return;
    }

    this.http
      .post('http://localhost:3000/register', this.registerForm.value)
      .subscribe({
        next: (res: any) => {
          alert(res.message || 'Usuário registrado com sucesso!');
          this.router.navigate(['/login']);//mover o usuario para login após ter completado o registro
        },
        error: (err) => {
          alert(
            'Erro ao registrar: ' + (err.error.message || 'Erro desconhecido')
          );
        },
      });
  }
}
